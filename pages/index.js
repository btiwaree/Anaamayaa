import Header from '@components/Header';
import Footer from '@components/Footer';
import FeedbackForm from '@components/FeedbackForm';

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header title="Anaamayaa Ayurveda Multi-Speciality clinic" />
        <div className="description">
          📍 भट्टी मोड, धरान रोड , बिराटनगर ६
          <div>
            📞 <a href="tel:+977-9805344642">९८०५३४४६४२</a>&nbsp;&nbsp;&nbsp;📞
            <a href="tel:+977-९८४२९५७९२७">९८४२९५७९२७</a>
          </div>
        </div>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
