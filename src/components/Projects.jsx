export default function Projects() {
  const projects = [
    { title: "CI/CD Pipeline", desc: "Automated deployment using Jenkins and Docker." },
    { title: "Monitoring Stack", desc: "Prometheus + Grafana for real-time metrics." },
    { title: "AWS Infra", desc: "Terraform-based scalable infrastructure." },
  ];
  return (
    <section id="projects" className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold mb-4">Projects</h3>
      <div className="space-y-4">
        {projects.map(p => (
          <div key={p.title} className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-semibold">{p.title}</h4>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
