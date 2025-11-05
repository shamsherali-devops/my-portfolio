export default function Skills() {
  const skills = ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Linux", "Terraform", "Jenkins"];
  return (
    <section id="skills" className="p-8 bg-white">
      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div key={skill} className="bg-gray-100 p-4 rounded shadow text-center font-semibold">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
