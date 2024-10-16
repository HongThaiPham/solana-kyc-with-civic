use anchor_lang::prelude::*;
declare_id!("BAF5oCh7sLAPfk9baGvX9tQGCe21aUYNU3mGxYLw7oav");

#[program]
pub mod test_program {

    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        solana_gateway::Gateway::verify_gateway_token_account_info(
            &ctx.accounts.gateway_token,
            ctx.accounts.signer.key,
            ctx.accounts.gatekeeper_network.key,
            Some(solana_gateway::VerificationOptions {
                check_expiry: true,
                expiry_tolerance_seconds: Some(120),
            }),
        )
        .map_err(|e| {
            msg!("Error verifying gateway token account info: {:?}", e);
            ProgramError::Custom(1)
        })?;

        ctx.accounts.data.counter += 1;

        msg!("Gateway token account info verified successfully");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        init_if_needed,
        payer = signer,
        space = 8 + 8,
        seeds = [b"data"],
        bump
    )]
    pub data: Account<'info, UserData>,
    /// CHECK:
    pub gateway_token: AccountInfo<'info>,
    /// CHECK:
    pub gatekeeper_network: UncheckedAccount<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct UserData {
    pub counter: u64,
}
