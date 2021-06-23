import React, { Component } from "react";

class Question extends Component {
    state = {
        title: '',
        summary: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            title: '',
            summary: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                시험지 제목
                <input
                    id = "title"
                    placeholder="제목 없는 시험지"
                    value={this.state.title}
                    onChange={this.handleChange}
                    onKeyPress={this.onKeyPress}
                    name="title"
                /><br/><br/>
                <span id="seolmung">시험지 설명</span>
                <textarea
                    placeholder="시험에 대한 설명을 입력하세요"
                    value={this.state.summary}
                    onChange={this.handleChange}
                    onKeyPress={this.onKeyPress}
                    name="summary"
                /><br/>
            </form>
        );
    }
}
export default Question;