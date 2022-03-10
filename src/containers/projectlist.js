
import React from "react";
import Layout from '../layout'
import IndexPage from '../pages/index'
import Collection from "../components/collection";
import ProjectCategory from "../components/projectcategory";
class ProjectList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: []
          }
    }
    projectNode(project, i){
         i = i + 1 ;
        let byline = project.id
        let client = project.id
        return (
            <li key={'project-' + project.id}>
            <a to={'/projects/' + project.slug}>
                <h3 className="projectlist--client">{client}</h3>
                <h4 className="projectlist--byline">{byline}</h4>
            </a>
        </li>
        )
    }
    render(){
        let projNodes = this.state.projects.map(this.projectNode)
        return (
            <div className="project-list">
                <ul className="menu vertical">
                {/* {this.state.projects.map(d => (<li key={d.id}>{d.project_byline}</li>))}  */}
                {projNodes}
                </ul>
            </div>
        )
    }
}


export default ProjectList;