const UserCard = ({ user }) => {
     if (!user) return null;
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure>
                {/* Use the user's profile picture from the prop, or a placeholder */}
                <img
                    src={user.photoUrl || "https://placehold.co/400x225/E5E7EB/1F2937?text=No+Image"}
                    alt={`${user.firstName} ${user.lastName}'s profile picture`}
                />

            </figure>
            <div className="card-body">
                {/* Display the user's full name */}
                <h2 className="card-title">{user.firstName} {user.lastName}</h2>
                <p>Connect with this developer and grow your network!</p>
                <div className="card-actions justify-center my-4">
                    {/* Placeholder button for a connection action */}
                    <button className="btn btn-primary">Intrested</button>
                    <button className="btn btn-secondary ">Ignore</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
