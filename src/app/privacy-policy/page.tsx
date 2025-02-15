import Container from "@/components/Container";
import Section from "@/components/Section";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Container>
      <Section
        id="privacy-policy"
        title="Privacy Policy"
        description="Last Updated: February 15, 2025"
      >
        <div>
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="mt-4">
            This Privacy Policy outlines the types of personal information that is received and collected by Durazno Technologies SAS and how it is used. By using our services, you consent to the data practices described in this policy.
          </p>

          <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
          <p>
            We may collect personal information from you in a variety of ways, including when you visit our site, register on the site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. The types of information we may collect include:
          </p>
          <ul className="list-disc pl-5">
            <li>Personal Identification Information: Name, email address, mailing address, phone number, etc.</li>
            <li>Technical Data: IP address, browser type, operating system, and other technical information.</li>
            <li>Usage Data: Information about how you use our website and services.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">2. How We Use Your Information</h3>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-5">
            <li>To provide, operate, and maintain our services.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To understand and analyze how you use our services.</li>
            <li>To develop new products, services, features, and functionality.</li>
            <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">3. Sharing Your Information</h3>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h3 className="text-xl font-semibold mt-6">4. Data Security</h3>
          <p>
            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
          </p>

          <h3 className="text-xl font-semibold mt-6">5. Your Rights</h3>
          <p>
            You have the right to request access to the personal information we hold about you, to request that we correct any inaccuracies, and to request that we delete your personal information, subject to certain exceptions.
          </p>

          <h3 className="text-xl font-semibold mt-6">6. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h3 className="text-xl font-semibold mt-6">7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-5">
            <li>Email: <a href="mailto:hola@durazno.io" className="text-blue-600">hola@durazno.io</a></li>
            <li>Website: <a href="https://www.durazno.io" className="text-blue-600">durazno.io</a></li>
          </ul>
        </div>
      </Section>
    </Container>
  );
};

export default PrivacyPolicyPage;
