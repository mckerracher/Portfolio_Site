import React, {Component} from "react";
import "./Opal.css"

class Opal extends Component {
    render() {
        return (
            <div className='Projects'>
                <div className="opal">
                <h4>Note: to paste into the shell, you must right click and paste. Ctrl + V won't work.</h4>
                <ol>
                    <li>To execute the makefile, hit the run button (the green play button).</li>
                    <li>If you want to compile a program written in the OPaL language, click on the "shell" tab
                        below and execute the following commands:
                        <ul>
                            <li>a) export LD_LIBRARY_PATH=build</li>
                            <li>b) build/opal --debug --output=output/PaperScissorsRock.bin input/PaperScissorsRock.opl</li>
                        </ul>
                    </li>
                    <li>If you want to run the program you just compiled, execute the following command:
                        <ul>
                            <li>a) ./output/PaperScissorsRock.bin</li>
                        </ul>
                    </li>
                    <li>If you want to see a report on the compiler's last run, that's possible! Note, after you
                        run the commands below, you may have to resize the windows. To get a better view of the
                        compilation report, I recommend making the shell window smaller. To see the report, run the
                        following commands:
                        <ul>
                            <li>a) cd report</li>
                            <li>b) firefox oc_report.html</li>
                        </ul>
                    </li>
                    <li>If you want to see the source code, that's best viewed on Github here. Most of the important
                        code is in the "src" directory.</li>
                </ol>
                </div>
                <iframe className="repl" src="https://replit.com/@JoshuaMcKerrach/OPaL?lite=true"/>
            </div>
        );
    }
}

export default Opal;