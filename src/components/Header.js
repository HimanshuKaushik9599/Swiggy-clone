const Title = () =>(
    <a href="/"> <img
     className="logo" 
       alt="Logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJG3kMcrgjZ3lKcqQkzU_LqoCYKcTvtDBr3tj3PQReeA&s"/>
        </a>
  );

  const HeaderComponent= () =>{
    return (
        <div className="header" style={{
            backgroundColor:"pink"
        }}>
            <Title/>
             <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
             </div>
        </div>
    );
};
  export default HeaderComponent ;