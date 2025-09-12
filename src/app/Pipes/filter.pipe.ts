import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({
    name: 'filter', 
    pure: false
})
export class FilterPipe implements PipeTransform{
    transform(list: Student[],filterBy: any){
        console.log('FilterPipe Called')
        if( filterBy.toLowerCase() === 'all' || filterBy === '' || list.length === 0){
            return list;
        }
        else{
            return list.filter( item => item.gender.toLowerCase() === filterBy.toLowerCase())
        }
        
    }
}