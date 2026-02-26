
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';


export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo
        title="Sip Happens Café"
        description="Please rate our service by selecting one of the options below."
      />
      
    </div>
    
  );
   
}
