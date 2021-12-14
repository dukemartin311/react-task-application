
import React, {Component} from 'react';


class Counter extends React.Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1});
        }
    }


    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm" >Increment</button>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm" >Decrement</button>
                {this.renderTags()}
            </div>
        );
    }

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}



export default Counter;