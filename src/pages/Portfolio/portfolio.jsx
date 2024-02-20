import Project from '../../components/Project/project';
import './portfolio.css';

//This should be in a seperate file, but importing that caused app crashing bugs...
const projectList = [
    {
        name: 'Bookshelf',
        links: {
            github: 'https://github.com/MLevey92/Bookshelf',
        },
        image: '../../assets/placeholder.jpg',
    },
    {
        name: 'Savor of the Day',
        links: {
            github: 'https://github.com/MLevey92/Savor-of-the-Day',
        },
        image: '../../assets/placeholder.jpg',
    }
]

export default function Portfolio () {
    return (
        <div className="projectContainer">
        <h3>Portfolio</h3>
        {
            projectList.map((project) => (
                <Project project={project}/>
            ))
        }
        
        </div>
    );
}