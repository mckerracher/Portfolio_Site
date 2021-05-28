import React, {Component} from "react";
import "./Dll.css"

class Dll extends Component {
    render() {
        return (
            <div className='Projects'>
                <h1>Doubly Linked List</h1>
                <div className="instructions">
                <ul>
                    <li>To see the source code:
                        <ul>
                            <li>Select the "files" icon in the top left portion of the replit window.
                                Expand the "Double Linked List" and "src" folders, and then open the IUDoubleLinkedList.java file.</li>
                            <li>Or, see it on Github <a href="https://github.com/mckerracher/Doubly-Linked-List">here</a>.</li>
                        </ul>
                    </li>
                </ul>
                </div>
                <iframe className="repl" src="https://replit.com/@JoshuaMcKerrach/Doubly-Linked-List?lite=false"/>
            </div>
        );
    }
}

export default Dll;