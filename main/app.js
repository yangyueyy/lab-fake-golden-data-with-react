const Text = React.createClass({

    handleDelClick: function (index) {
        this.props.deleted(index);
    },
    render: function () {
        return (<div>
            <textarea rows="10" cols="50"></textarea>
            <input type="button" value=" X " onClick={this.handleDelClick.bind(this, this.props.index)}/>
        </div>)
    }
});
const Timer = React.createClass({
    handleDelClick: function (index) {
        this.props.deleted(index);
    },
    render: function () {
        return (
            <div>
            <input type="date"/>
            <input type="button" value=" X " onClick={this.handleDelClick.bind(this,this.props.index)}/>
        </div>
        )
    }
});

const Box = React.createClass({

    getInitialState: function () {
        return {
            inputLists: [],
            preview: false
        }
    },
    handleClick: function () {
        // let inputLists = this.state.inputLists;
        if (document.getElementsByName('add')[0].checked === true) {
            this.state.inputLists.push('text');
        }
        else if (document.getElementsByName('add')[1].checked === true) {
            this.state.inputLists.push('date');
        }

        //    this.state.inputLists = inputLists;
        //   console.log(this.state.inputLists);
        // console.log(this.state.inputLists.length);
        this.setState({inputLists: this.state.inputLists});
    },

    handleDeleted: function (index) {
        this.state.inputLists.splice(index, 1);
        this.setState({inputLists: this.state.inputLists});
    },

    previewClick:function(){
        this.state.preview = true;
        this.setState({preview:this.state.preview});
    },

    backClick:function () {
        this.state.preview = false;
        this.setState({preview:this.state.preview});
    },

    render: function () {
        console.log(this.state.inputLists);
        if(this.state.preview === false) {
            return (<div>
                <div className="header"><input type="button" id="preview" value="预览" onClick={this.previewClick}/></div>
            <div id="content">
                <div id="left">
                <form>
                {this.state.inputLists.map((list, index) => {
                    if (list === 'text') {
                        return <Text deleted={this.handleDeleted} index={index}/>
                    } else {
                        return <Timer deleted={this.handleDeleted} index={index}/>
                    }
                })}
        </form>
            </div>
            <div id="right">
                <label><input type="radio" name="add" className="text"/>文本框</label><br/>
                <label><input type="radio" name="add" className="date"/>时间框</label><br/>
                <button  id="add" type="button" onClick={this.handleClick}> +</button>
            </div>
            </div>
            </div>)
        }
        else{
            return (
                <div>
                <div className="header"><input type="button" id="back" value="编辑" onClick={this.backClick}/></div>
            <div className="backContent">
                <form>
                {this.state.inputLists.map((list, index) => {
                    if (list === 'text') {
                        return <div>
                        <textarea rows="10" cols="50"></textarea>
                            </div>
                    } else {
                        return <div><input type={list}/></div>
                    }
                })}
        </form>
            </div>
            <input type="button" value="提交"　/>
                </div>
        )
        }
    }
});
ReactDOM.render(<Box/>, document.getElementById("page"));