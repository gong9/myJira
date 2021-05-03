import Login from './view/Login'
import './App.css'
/**
 * 
 * 解释作为整个应用的顶层，可以再这做一层校验。即如果有user信息则允许查看里面的东西，没有直接跳出
 */
function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
