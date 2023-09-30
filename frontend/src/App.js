import Sidebar from './components/Sidebar'; 
import Charts from './components/Charts';
import Search from './components/Search';
import './css/main.css'
function App() {
  const navs = [
  {
    nav:'home',
    link:'/home',
    isMulti:false
   },
   {
    nav:'services',
    link:'/home',
    isMulti:true,
    types:[
      {
        nav:'home',
        link:'/home'
       },
       {
        nav:'home',
        link:'/home'
       }
    ]
   }
];
  return (
    <>
      <section>
        <div className='flex'>
          <div className='w-72 bg-blue-950 h-full fixed'>
            <Sidebar navs={navs} />
          </div>
          <div className='pl-72'>
            <Charts />
            <Search />
          </div>
        </div>
        </section>
    </>
  );
}

export default App;