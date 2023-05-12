
obj = {
         		marks : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]
                subjects : [], // DO NOT WRITE ANYTHING IN THIS [ Data will be automatically availaible during execution]

				 bestOfFive : function() { 
                 	let min =Infinity
                 	for(let i=0;i<this.marks.length;i++){
                 	    if(this.marks[i]<min){
                 	        min = this.marks[i]
                 	    }
                 	}
                    // Part 1 : Write Code Here
                    let sum=0
                    for(let i=0;i<this.marks.length;i++){
                    sum+=this.marks[i]
                    }
                    console.log(sum-min)
                    
                    
                    // Console.log the output : total of best of five
                 },



				 badSubject : function() { 
                 var f
                 let min = Infinity
                 for(let i=0;i<this.marks.length;i++){
                     if(this.marks[i]<min){
                         min = this.marks[i]
                         f= this.subjects[i]
                     }
                 }
                 console.log(f)
                 	// Part 2 : Write Code Here
                    
                    
                    
                    // Console.log the result : subject name with lowest marks 
                 },
			
            
            
				 bestSubject : function() { 
                 
                 	// Part 3 : Write Code Here
                    var max = -Infinity
                    var sub
                    for(let i=0;i<this.marks.length;i++){
                        if(this.marks[i]>max){
                            max= this.marks[i]
                       sub = this.subjects[i]
                        }
                    }
                    
                    console.log(sub)
                 	// Console.log the output : subject name with highest marks
                 },
}



