$(document).ready(function(){
  $("#btn-checkAccount").on('click', function(e) {
    e.preventDefault();
    document.getElementById('isAccountAvailable').classList.remove("custom-hide");
    document.getElementById('isAccountAvailable').classList.add("custom-show");
    document.getElementById('accountName').classList.remove("custom-hide");
    document.getElementById('accountName').classList.add("custom-show");
  })

  // if($("#dbank option:selected").text() == 'BNI'){
  //   document.getElementById('nojournal').classList.remove("custom-hide");
  //   document.getElementById('nojournal').classList.add("custom-show");
  // } else if ($("#dbank option:selected").text() == 'Interbank') {
  //   document.getElementById('nobor').classList.remove("custom-hide");
  //   document.getElementById('nobor').classList.add("custom-show");
  // } 

  
  $("#ibCheck").on('change', function(e) {
    e.preventDefault();
    document.getElementById('destBank').classList.remove("custom-hide");
    document.getElementById('destBank').classList.add("custom-show");
  })


  $("#inCheck").on('change', function(e) {
    e.preventDefault();
    document.getElementById('destBank').classList.remove("custom-show");
    document.getElementById('destBank').classList.add("custom-hide");
  })

  $("#btn-submitBulk").on('click', function(e){
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Success!',
          'Your file has been submited.',
          'success'
        )
        document.getElementById('summary-bulk').classList.remove("custom-hide");
        // document.getElementById('isAccountAvailable').classList.add("custom-show");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Please make sure the file you want submit:)',
          'error'
        )
      }
    })
  })
  
  $("#btn-submitMaster").on('click', function(e){
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Success!',
          'Your Data has been submited.',
          'success'
        )
        location.href = "/custom/pages/master-account/master-account.html";
        // document.getElementById('summary-bulk').classList.remove("custom-hide");
        // document.getElementById('isAccountAvailable').classList.add("custom-show");
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Please make sure data you want submit:)',
          'error'
        )
      }
    })
  })

  $(".btn-updateStatus").on('click', function(e){
    console.log("tes");
    e.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Submit it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Success!',
          'Your file has been submitted.',
          'success'
        )
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Please make sure the file you want submit:)',
          'error'
        )
      }
    })
  })
});  


function showRemark(select){
  if(select.value==2){
    document.getElementById('pstatus-remark').classList.remove("custom-hide");
    document.getElementById('pstatus-remark').classList.add("custom-show");
  } else{
    document.getElementById('pstatus-remark').classList.add("custom-hide");
  }
} 

function selectInstructionType(select) {
  if (select.value == 'lainnya') {
    document.getElementById('acc_no').classList.remove('custom-hide');
    // document.getElementById('acc_no').classList.remove('custom-show');
  }  else{
    document.getElementById('acc_no').classList.add('custom-hide');
  }
}

// function checkStatus(param) {
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Data Success Checked',
//         showConfirmButton: false,
//         timer: 2000,
//       }).then(okay => {
//     if (okay) {
//         if(param == "badge-data1"){
//             document.getElementById('trx-data1').classList.remove("badge-light-danger");
//             document.getElementById('trx-data1').classList.add("badge-light-warning");
//             document.getElementById('trx-data1').innerHTML = "Pending Release";
//         } else if(param == "badge-data2"){
//             document.getElementById('trx-data2').classList.remove("badge-light-danger");
//             document.getElementById('trx-data2').classList.add("badge-light-warning");
//             document.getElementById('trx-data2').innerHTML = "Pending Release";
//         } else if(param == "badge-data3"){
//             document.getElementById('trx-data3').classList.remove("badge-light-danger");
//             document.getElementById('trx-data3').classList.add("badge-light-warning");
//             document.getElementById('trx-data3').innerHTML = "Pending Release";
//         }
//    }})
// }