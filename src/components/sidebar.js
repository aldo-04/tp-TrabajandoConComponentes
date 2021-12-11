import Actions from "./Actions"

function Sidebar() {
    return (      
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" >

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/images/logo-DH.png" alt="Digital House" />
				</div>
			</a>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></a>
			</li>

			<Actions />
		</ul>
        );
}

export default Sidebar;