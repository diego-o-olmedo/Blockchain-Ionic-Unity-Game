import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"
import { FormControl } from "@angular/forms"
import "rxjs/add/operator/debounceTime"

/**
 * Generated class for the CombinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-combine",
  templateUrl: "combine.html"
})
export class CombinePage {
  loading = false
  searchControl: FormControl
  searchTerm: string = ""

  data = [
    {
      id: "55",
      name: "Name",
      text: "Text",
      img: "/assets/imgs/weapons/Black Hole Missile.png"
    },
    {
      id: "657237",
      name: "Name2",
      text: "Text2",
      img: "/assets/imgs/weapons/Black Hole Missile.png"
    },
    {
      id: "11",
      name: "Name3",
      text: "Text3",
      img: "/assets/imgs/weapons/Black Hole Missile.png"
    },
    {
      id: "123",
      name: "Name",
      text: "Text",
      img: "/assets/imgs/weapons/Black Hole Missile.png"
    },
    {
      id: "532324",
      name: "Name2",
      text: "Text2",
      img: "/assets/imgs/weapons/Black Hole Missile.png"
    },
    {
      id: "523442",
      name: "Name",
      text: "Text",
      img: "/assets/imgs/weapons/Black Hole Missile.png"
    },
    {
      id: "11",
      name: "Name2",
      text: "Text2",
      img: "/assets/imgs/weapons/Black Hole Missile.png"
    }
  ]

  items: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchControl = new FormControl()
    this.setFilteredItems()
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.setFilteredItems()
    })
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CombinePage")
  }

  filterItems(searchTerm) {
    let result = this.data.filter(item => {
      return item.id.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
    let result2 = this.data.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
    result = result.concat(result2)

    function removeDuplicatesBy(keyFn, array) {
      var mySet = new Set()
      return array.filter(function(x) {
        var key = keyFn(x),
          isNew = !mySet.has(key)
        if (isNew) mySet.add(key)
        return isNew
      })
    }

    return removeDuplicatesBy(x => x.id, result)
  }

  setFilteredItems() {
    this.items = this.filterItems(this.searchTerm)
  }

  reorderItems(e) {
    console.log(e)
  }
}
