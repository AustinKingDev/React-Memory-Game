import React, { Component } from 'react';
import "./MemoryCard.css"

export class MemoryCard extends Component {
    
  render() {
      let memoryCardInnerClass = "MemoryCardInner";
      if (this.props.isFlipped) {
           memoryCardInnerClass = "MemoryCardInner flipped"
      }
    return (
    <div className='MemoryCard' onClick={this.props.pickCard}>
       <div className={memoryCardInnerClass}>
         <div className="MemoryCardBack">
            <img src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' alt=""></img>
         </div>
         <div className='MemoryCardFront'>{this.props.symbol}</div>
        </div>
    </div>
    )
  }
}

export default MemoryCard;
