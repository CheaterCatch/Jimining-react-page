import React, { Component } from "react";
// detail 마우스 클릭하면 파란색 보더,
// 아니면 보더 없어지고 수정도 못하게 되고 hr이랑 답 가려짐
class Detail extends Component {
    state = {
        ask: '',
        stu_answer: '',
        answer: ''
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
            ask: '',
            stu_answer: '',
            answer: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p id="num">2.</p>
                <input
                    placeholder="태영이의 혈액형을 입력하세요."
                    value={this.state.ask}
                    onChange={this.handleChange}
                    name="ask"
                    id="ask"
                /><br/>
                <input
                    placeholder="답을 입력하시오."
                    value={this.state.stu_answer}
                    onChange={this.handleChange}
                    name="stu_answer"
                /><hr/>
                <input
                    //placeholder="답을 입력하시오."
                    value={this.state.answer}
                    onChange={this.handleChange}
                    name="answer"
                />
            </form>
        );
    }
}

export default Detail;