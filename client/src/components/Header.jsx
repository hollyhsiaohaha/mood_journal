import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        navigate('/home');
      },
    },
    {
      label: 'Journals',
      icon: 'pi pi-fw pi-inbox',
      command: () => {
        navigate('/journal');
      },
    },
    {
      label: 'Graph',
      icon: 'pi pi-fw pi-share-alt',
      command: () => {
        navigate('/graph');
      },
    },
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-chart-bar',
      command: () => {
        navigate('/dashboard');
      },
    },
    {
      label: 'User',
      icon: 'pi pi-fw pi-user',
      command: () => {
        navigate('/profile');
      },
    },
  ];

  return (
    <div className="card">
      <TabMenu model={items} />
    </div>
  );
}

export default Header;