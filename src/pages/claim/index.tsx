import { useState, useEffect } from 'react';

export default function Claim() {
    // Simulated user data - replace with actual data from your backend or contract
    const userBalances = {
        longTokens: 10, // Replace with actual balance
        shortTokens: 5, // Replace with actual balance
    };

    const poolParameters = {
        statusFinalReferenceValue: 3, // Replace with actual value from contract
        payoutLong: 1.5, // Replace with actual value from contract
        payoutShort: 2.0, // Replace with actual value from contract
    };

    const [claimable, setClaimable] = useState(false);

    useEffect(() => {
        // Check if the claim can be made based on the pool status
        if (poolParameters.statusFinalReferenceValue === 3) {
            setClaimable(true);
        }
    }, [poolParameters.statusFinalReferenceValue]);

    const handleClaim = () => {
        // TODO: Implement claim logic here, interact with the smart contract
        // Calculate payout based on user's balances and pool parameters
        const payoutAmount = userBalances.longTokens * poolParameters.payoutLong;

        // TODO: Trigger the claim process
        // Replace this with actual contract interaction
        // Example: contract.claimPayout(payoutAmount);

        // TODO: display a success message or update UI accordingly
    };

    return (
        <div className="flex-1 w-full h-full p-4 lg:px-40 overflow-visible flex flex-col justify-center items-center gap-16 pt-20">
            <div className='w-full h-full flex flex-col justify-evenly items-center bg-white text-black rounded-lg p-10'>
                <h2 className="text-2xl font-semibold">Claim Your Payout</h2>

                <div className="mt-4">
                    <p className="text-lg font-semibold">Your Balances:</p>
                    <p className="text-sm text-gray-600">At/Above (LONG): {userBalances.longTokens} tokens</p>
                    <p className="text-sm text-gray-600">Below (SHORT): {userBalances.shortTokens} tokens</p>
                </div>

                <div className="mt-6">
                    <p className="text-lg font-semibold">Claim Your Payout:</p>
                    {claimable ? (
                        <button
                            type='button'
                            onClick={handleClaim}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md"
                        >
                            Claim
                        </button>
                    ) : (
                        <button
                            type='button'
                            className="bg-gray-300 text-gray-500 cursor-not-allowed font-semibold px-6 py-3 rounded-md"
                            disabled
                        >
                            Claim
                        </button>
                    )}
                    {claimable && (
                        <p className="text-sm text-green-600 mt-2">
                            Estimated Payout: {userBalances.longTokens * poolParameters.payoutLong} ETH
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
