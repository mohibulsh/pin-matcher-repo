// validation function+

function valueValidation (getID1,getId2){
        const getIdField1 = document.getElementById(getID1);
        const getIdField2 = document.getElementById(getID2);

        if( isNaN(getID1) || isNaN(getId2)){
            alert('please give a number');
        } else if(getID1 >=0 || getId2 >=0){
            alert('please give a valid number')
        }
          
}