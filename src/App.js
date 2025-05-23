import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box , H1} from "./components/styles";

/**
 * 과제1-2: 이곳에 assignments 폴더 내 작성한 코드를 불러오는 코드를 작성해주세요.
 * 예시:
 * import Woojin from "./assignments/woojin";
 */

import Example from "./assignments/example";
import TodoApp from "./TodoApp.js";

function App() {
  return (
    <Router>

      <Routes>
        {/* 과제1-2: 이곳에 과제1-1에서 작성한 코드를 불러오는 코드를 작성해주세요.
            ex) <Route path="/woojin" element={<Woojin />} />
        */}
        <Route path="/" element={<div>TodoApp.js와 example.js를 확인해주세요.</div>} />

        {/* Example과 TodoApp을 개별 경로로 분리 */}

        <Route path="/example" element={<Box><Example /></Box>} />
        <Route path="/TodoApp" element={<Box><TodoApp /></Box>} />


      </Routes>
    <Box>
    <nav style={{ display: 'flex',  justifyContent: 'center', gap: '100px' }}>
    <H1><Link to="/example">Example</Link> </H1>
    <H1><Link to="/TodoApp">TodoApp</Link> </H1>
    </nav>
    </Box>
    </Router>
    
  );

}

export default App;
