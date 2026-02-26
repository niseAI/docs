import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div> توثيق وجهة برمجة التطبيقات nise Ai</div>
        <p className="intro">مرحبًا بك في توثيق واجهة برمجة التطبيقات nise Ai! هذا المستند يهدف إلى تقديم نظرة عامة شاملة على واجهة برمجة التطبيقات الخاصة بنا، بما في ذلك كيفية استخدامها، والميزات المتاحة، وأمثلة على الطلبات والاستجابات.</p>
        <p>واجهة برمجة التطبيقات nise Ai هي أداة قوية تتيح للمطورين الوصول إلى مجموعة واسعة من الخدمات والميزات التي تقدمها nise Ai. سواء كنت ترغب في دمج قدرات الذكاء الاصطناعي في تطبيقك، أو الوصول إلى بيانات معينة، أو تنفيذ عمليات محددة، فإن واجهة برمجة التطبيقات لدينا توفر لك الأدوات اللازمة لتحقيق ذلك.</p>
        <p>في هذا المستند، ستجد معلومات حول كيفية البدء، وكيفية المصادقة، وكيفية إجراء الطلبات المختلفة، بالإضافة إلى أمثلة عملية تساعدك على فهم كيفية استخدام واجهة برمجة التطبيقات بشكل فعال.</p>
          <p>نحن ملتزمون بتوفير تجربة مستخدم ممتازة، لذا إذا كان لديك أي أسئلة أو اقتراحات، فلا تتردد في التواصل معنا عبر قنوات الدعم المتاحة.</p>
        </div>
        {/* جيت هاب و npm */}
        <a href="https://www.npmjs.com/package/n8n-nodes-nise-ai" target="_blank" rel="noopener noreferrer">n8n-nodes-nise-ai on npm</a>
        <br />
        <a href="https://github.com/niseAI/docs" target="_blank" rel="noopener noreferrer">nise AI Documentation on GitHub</a>
        {/* تواصل معنا عبر البريد  */}
        <p>للتواصل معنا عبر البريد الإلكتروني، يرجى إرسال رسالة إلى <a href="mailto:info@nise.me">info@nise.me</a></p>  
    </>
  )
}

export default App
