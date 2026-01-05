const skills = ["HTML", "CSS", "JavaScript", "React"];

function Profile() {
  return (
    <div>
      <h2>Veena Singh</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
