function MainUI() {
    return <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
            <div className="flex-none">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                 </label>
            </div> 
            <div className="flex-1 px-2 mx-2">Amazel Client</div>
        </div>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        <li><a>Summary</a></li>
        <li><a>Config</a></li>
      </ul>
    </div>
  </div>
}

export default MainUI;