import { SetStateAction, useState } from 'react';

export default function Report() {
    const [outcome, setOutcome] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleOutcomeChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setOutcome(e.target.value);
    };

    const handleSubmit = async () => {
        // TODO: Implement 'setFinalReferenceValue' function

        // Simulated delay to mimic a real network request
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            // Reset the form or show a success message
            setOutcome('');
        }, 2000);
    };

    return (
        <div className="flex-1 w-full h-full p-4 lg:px-40 overflow-visible flex flex-col justify-center items-center gap-16 pt-20">
            <div className='w-full h-full flex flex-col justify-evenly items-center bg-white text-black rounded-lg p-10'>
                <h2 className="text-2xl font-semibold">Report Outcome</h2>

                <form className="mt-4" onSubmit={handleSubmit}>
                    <label className="text-lg font-semibold" htmlFor="outcome">
                        Enter Outcome:
                    </label>
                    <input
                        type="text"
                        id="outcome"
                        className="w-full px-4 py-2 rounded-md border border-gray-300"
                        placeholder="Enter the outcome"
                        value={outcome}
                        onChange={handleOutcomeChange}
                        disabled={isSubmitting}
                    />

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md"
                            disabled={isSubmitting || !outcome}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Outcome'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
