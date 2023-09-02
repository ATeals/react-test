const Profile = ({ name, age }: { name: string; age: number }) => {
    return (
        <>
            <span>{name}</span>
            <span>{age}</span>
        </>
    );
};

export default Profile;
