/**
 * Created with JetBrains WebStorm.
 * Author: songxg
 * Date: 16/9/19
 * Time: 下午3:11
 */
import React, { PropTypes } from 'react';
import domAlign from 'dom-align';
import addEventListener from 'rc-util/lib/Dom/addEventListener'

const _prefixCls = 'popup-v7';

class Popup extends React.Component {

    constructor (props) {
        super(props);

        const visible = props.visible,
            anchor = props.anchor;

        this.state = {
            visible: visible,
            offset: {
                x: 0,
                y: 0,
            },
            anchor: anchor,
        };
    }

    render () {
        const { visible, offset } = this.state;
        const { placement, closeBtn, width, height, className } = this.props;

        let style = Object.assign({
            display: visible ? 'block' : 'none',
        }, offset);

        if (width) {
            style.width = width + 'px';
        }
        if (height) {
            style.height = height + 'px';
        }

        let popClassName = _prefixCls + '-popup ' + _prefixCls + '-popup-' + placement + ' ' + className;

        return (
            <div ref='anchorClick' className={ _prefixCls + '-anchor' } onClick={ this._anchorClick.bind(this) }>
                {
                    React.cloneElement(this.props.anchor, {
                        ref: 'popAnchor'
                    })
                }
                {
                    visible &&
                    <div ref='popNode' className={ popClassName } style={ style } onClick={ this._popupClick }>
                        { closeBtn && <span className={ _prefixCls + '-close-btn' } onClick={ this.hide }></span> }
                        <div className={ _prefixCls + '-content' }>
                            {
                                React.Children.map(this.props.children, (item) => {
                                    return item;
                                })
                            }
                        </div>
                        {
                            this.props.showBtns ?
                                (<div className={ _prefixCls + '-btns' }>
                                    <Button.cancel onClick={ this._onCancel }/>
                                    <Button.confirm theme="spec1" onClick={ this._onConfirm }/>
                                </div>) : null
                        }
                    </div>
                }
            </div>
        );
    }

    componentDidMount () {
        const { visible } = this.state;

        this.doAlign();

        if (visible) {
            this.startListenWindowClick();
        }
    }

    componentDidUpdate () {
        const { visible } = this.state;

        this.doAlign();

        if (visible) {
            this.startListenWindowClick();
        }
        else {
            this.stopListenWindowClick();
        }
    }

    componentWillUnmount () {
        this.stopListenWindowClick();
    }

    startListenWindowClick () {
        if (!this.windowClickHander) {
            this.windowClickHander = addEventListener(window, 'click', this.windowClick.bind(this));
        }
    }

    stopListenWindowClick () {
        if (this.windowClickHander) {
            this.windowClickHander.remove();
            this.windowClickHander = null;
        }
    }

    windowClick (evt) {
        if (evt.target == this.refs.popAnchor) {
            return;
        }

        this.setState({
            visible: false
        });
    }

    doAlign () {
        const { visible } = this.state;
        const { placement, offset } = this.props;
        const { popAnchor, popNode } = this.refs;

        const sourcePos = this.getSourcePos(placement);

        if (visible) {
            domAlign(popNode, popAnchor, {
                points: [sourcePos, placement],
                overflow: {
                    adjustX: true,
                    adjustY: true
                },
                offset: offset
            });
        }
    }

    getSourcePos (placement) {
        let sourcePos = 'bl';
        switch (placement) {
            case 'tl':
                sourcePos = 'bl';
                break;
            case 'tc':
                sourcePos = 'bc';
                break;
            case 'tr':
                sourcePos = 'br';
                break;
            case 'cl':
                sourcePos = 'cr';
                break;
            case 'cc':
                sourcePos = 'cc';
                break;
            case 'cr':
                sourcePos = 'cl';
                break;
            case 'bl':
                sourcePos = 'tl';
                break;
            case 'bc':
                sourcePos = 'tc';
                break;
            case 'br':
                sourcePos = 'tr';
                break;
        }

        return sourcePos;
    }

    _anchorClick (evt) {
        console.log('_anchorClick');

        const { visible } = this.state;

        this.setState({
            visible: !visible
        });
    }

    _popupClick (evt) {
        //如果点击在面板上不隐藏
        evt.stopPropagation();
    }

    _onCancel () {

    }

    _onConfirm () {

    }
}

Popup.propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
    anchor: PropTypes.any,
    placement: PropTypes.string,
    closeBtn: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    offset: PropTypes.array,
    showBtns: PropTypes.bool,
};

Popup.defaultProps = {
    className: '',
    visible: false,
    anchor: null,
    placement: 'tl', // bl(左下) bc(中下) br(右下) cl(左中) cr(右中) cc(中中) tl(左上) tc(中上) tr(右上)
    closeBtn: false,
    width: 100,
    height: 50,
    offset: [0, 0],
    showBtns: false
};

export default Popup;