import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'albert einstein', 'you cant blame gravity for falling in love.', 'admin', new Date(1998, 10, 1)),
    new Quote(2, 'Maya Angelou','if you are always trying to be normal you will never know how amazing you can be','admin', new Date(1990, 4, 3)),
    new Quote(3, 'Marilyn Monroe', 'im selfish, impatient and a little insecure. i make mistakes,i am out of control and at times hard to handle.but if you cant handle me at my worst,then you sure as hell dont deserve me at my best', 'admin', new Date(2010, 9, 7)),

  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}
