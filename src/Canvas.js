import React, {Component} from 'react';
import BST from './BST';

export default class Canvas extends Component {
  constructor(props) {
    super(props);
    console.log(props.input);
  }
  draw(ctx, x, y, node, w) {
    if (node.left) {
      ctx.strokeStyle = '#fff';
      ctx.setLineDash([3, 10]);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - w, y + 100);
      ctx.stroke();
      this.draw(ctx, x - w, y + 100, node.left, w * 0.5);
    }
    if (node.right) {
      ctx.strokeStyle = '#fff';
      ctx.setLineDash([3, 10]);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w, y + 100);
      ctx.stroke();
      this.draw(ctx, x + w, y + 100, node.right, w * 0.5);
    }
    ctx.beginPath();
    ctx.fillStyle = 'crimson';
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.font = 'normal 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(node.data.toString(), x, y + 8);
  }
  componentDidMount() {
    const canvas = document.querySelector('#board');
    canvas.width = window.screen.width * 0.8;
    canvas.height = window.screen.height * 0.6;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.offsetWidth;
    var tree = new BST();
    this.props.input.map((i) => tree.insert(i));
    if (tree.root) this.draw(ctx, parseInt(w / 2), 30, tree.root, w * 0.2);
    // console.log(tree);
    // tree.inOrder();
  }
  componentDidUpdate() {
    console.log(this.props.input);
    const canvas = document.querySelector('#board');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var w = canvas.offsetWidth;
    var tree = new BST();
    this.props.input.map((i) => tree.insert(i));
    if (tree.root) this.draw(ctx, parseInt(w / 2), 30, tree.root, w * 0.2);
    // console.log(tree);
    // tree.inOrder();
  }
  render() {
    return (
      <div>
        <canvas id="board" />
      </div>
    );
  }
}
