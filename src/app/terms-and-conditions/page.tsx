import Container from "@/components/Container";
import Section from "@/components/Section";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <Container className="prose max-w-4xl pb-8 pt-12">
      <Section
        id="terms-and-conditions"
        title="Terms and Conditions of Use"
        description="Last Updated: February 15, 2025"
      >
        <div className="space-y-8 text-gray-600">
          <div className="rounded-lg bg-blue-50 p-6 mb-8">
            <p className="text-blue-800">
              By accessing or using any services provided by Durazno Technologies SAS 
              ("Company", "we", "us", or "our"), you agree to be bound by these 
              Terms and Conditions. If you do not agree with any part of these terms, 
              you may not access our services.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">1. Introduction</h2>
            <p>
              These Terms and Conditions ("Terms") govern your access to and use of our 
              artificial intelligence services, software, and related documentation 
              (collectively, "Services"). Our Services are provided by:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <p className="font-medium">DURAZNO TECHNOLOGIES SAS</p>
              <p>Legal Form: Sociedad por Acciones Simplificada</p>
              <p>RFC: DTE211207UU7</p>
              <p>Address: Calle Tlayeca 2 #16, San Bernardino, Texcoco, Estado de México</p>
              <p>Código Postal: 56260, México</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">2. Services Overview</h2>
            <p className="font-medium text-gray-700">
              We provide enterprise-grade artificial intelligence solutions including:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white border rounded-lg">
                <h3 className="font-medium mb-2 text-blue-600">Core Services</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Natural Language Processing (NLP) systems</li>
                  <li>Computer Vision solutions</li>
                  <li>Autonomous AI agents for business communication</li>
                  <li>Generative AI implementations</li>
                </ul>
              </div>

              <div className="p-4 bg-white border rounded-lg">
                <h3 className="font-medium mb-2 text-blue-600">Technical Features</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Retrieval Augmented Generation (RAG) systems</li>
                  <li>Multi-modal AI integrations</li>
                  <li>API fallback mechanisms with LLM backups</li>
                  <li>Real-time processing architectures</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-700">
                Service availability and specific features may vary by subscription plan. 
                Detailed technical specifications and SLAs are provided in individual 
                service agreements.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">3. Acceptable Use</h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-medium text-red-700 mb-2">Prohibited Activities</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Reverse engineering or unauthorized access attempts</li>
                  <li>Generating illegal or harmful content</li>
                  <li>High-frequency automated requests without prior authorization</li>
                  <li>Commercial resale of service outputs without written consent</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-500">
                We reserve the right to immediately suspend accounts violating these 
                terms and report illegal activities to authorities.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">4. Data Handling</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Collection</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Account information (name, email, country)</li>
                  <li>Technical data (IP, device information)</li>
                  <li>Usage patterns and service interactions</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Protection</h3>
                <ul className="list-disc pl-4 space-y-1">
                  <li>AES-256 encryption at rest and in transit</li>
                  <li>Regular security audits</li>
                  <li>Role-based access controls</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                We adhere to both Mexican NOM-151 standards and GDPR requirements 
                for international users. Data retention period: 5 years from last 
                account activity.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">5. Legal Provisions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Liability</h3>
                <p className="text-sm">
                  Our total liability for any claims shall not exceed the 
                  amount paid by you during the 12 months preceding the claim. 
                  We exclude liability for indirect, incidental, or punitive damages.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Governing Law</h3>
                <p className="text-sm">
                  These Terms shall be governed by the laws of Mexico City, Mexico. 
                  Any disputes shall be resolved through binding arbitration under 
                  CAM rules.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">6. Policy Updates</h2>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-700">
                We may update these Terms periodically. Continued use after changes 
                constitutes acceptance. Material changes will be notified via email 
                or service dashboard 30 days prior to taking effect.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">Contact Information</h2>
            <div className="flex gap-4 items-center">
              <div className="flex-1 bg-white p-4 rounded-lg border">
                <p className="font-medium">Legal Inquiries:</p>
                <a 
                  href="mailto:hola@durazno.io" 
                  className="text-blue-600 hover:text-blue-800 break-words"
                >
                  hola@durazno.io
                </a>
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg border">
                <p className="font-medium">Privacy Policy:</p>
                <a
                  href="https://www.durazno.io/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-words"
                >
                  durazno.io/privacy-policy
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Response time: 5-7 business days. For urgent matters, include 
              "Legal Urgent" in email subject line.
            </p>
          </section>
        </div>
      </Section>
    </Container>
  );
};

export default TermsAndConditionsPage;
