import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service'; 
import { flyInOut } from '../animation/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut()
    ]   
})
export class HomeComponent implements OnInit {


  dish!: Dish;
  promotion!: Promotion;
  lead! :  leader;
  errMess!: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL : String) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dishes => this.dish = dishes,
      errmess => this.errMess = <any>errmess);

    this.promotionservice.getFeaturedPromotion().subscribe(promotions => this.promotion= promotions,
      errmess => this.errMess = <any>errmess);

    this.leaderService.getFeaturedLeader().subscribe(leaders => this.lead= leaders,
      errmess => this.errMess = <any>errmess);
    
   
  }

}
