import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Page extends React.Component {
    render() {
        const { pageIndex } = this.props;

        return (
            <CSSTransitionGroup
                transitionName={{
                    appear: 'templateAppear',
                    appearActive: 'templateAppearActive',
                }}
                transitionAppear={!!true}
                transitionAppearTimeout={100}
                component="div"
            >
                <div className="page">
                    <div className="content">
                        <p>{`第 ${pageIndex} 页`}</p>
                        <small>兄嘚，尝试滑动一下呗</small>
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default class App extends React.Component {
    state = {
        currPage: 1
    }

    touchStart = (event) => {
        this.startY = event.touches[0].screenY;
    }

    touchMove = (event) => {
        event.preventDefault();
        this.endY = event.touches[0].screenY;
    }

    touchEnd = () => {
        const { currPage } = this.state;
        const direction = this.startY - this.endY || 0;
        const $page = this.$page.querySelector('.page');
        const firstPage = currPage <= 1 && direction < 0;
        const lastPage = currPage >= 4 && direction > 0;
        const style = {
            opacity: 0,
            top: `${direction > 0 ? -100 : 100}vh`
        };
        const updatePage = () => {
            this.setState((prevState) => ({
                currPage: prevState.currPage + (direction > 0 ? 1 : -1)
            }))
        };

        if ((Math.abs(direction) < 50) || firstPage || lastPage) {
            return;
        }

        window.$($page).animate(style, 500, 'swing', updatePage);
    }

    render() {
        const { currPage } = this.state;

        return (
            <div
                ref={d => this.$page = d}
                onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}
                className="pageContent"
            >
                <Page key={currPage} pageIndex={currPage} />
            </div>
        )
    }
}
