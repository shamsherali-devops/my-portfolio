export default function Certifications() {
  const certs = [
    "AWS Certified Solutions Architect",
    "Docker & Kubernetes Mastery",
    "CI/CD with Jenkins",
    "SQL for Data Analysis",
    "Power BI Fundamentals"
  ];
  return (
    <section id="certifications" className="p-8 bg-white">
      <h3 className="text-2xl font-bold mb-4">Certifications</h3>
      <ul className="list-disc pl-6 space-y-2">
        {certs.map(c => <li key={c}>{c}</li>)}
      </ul>
    </section>
  );
}
