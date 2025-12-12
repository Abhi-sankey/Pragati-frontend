export const Greeting = () => {
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {getGreeting()}, Learner!
            </h1>
            <p className="mt-1 text-sm text-gray-500">
                Here's what's happening with your courses today.
            </p>
        </div>
    );
};
