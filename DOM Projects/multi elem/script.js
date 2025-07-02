let e1=document.getElementById('e1')
let e2=document.getElementById('e2')
let e3=document.getElementById('e3')
let e4=document.getElementById('e4')
let e5=document.getElementById('e5')
let i1=document.getElementById('i1')
let i2=document.getElementById('i2')
let i3=document.getElementById('i3')
let i4=document.getElementById('i4')
let i5=document.getElementById('i5')

e1.addEventListener('mouseenter',function(){
    i1.style.opacity='100'
    e1.addEventListener('mousemove',function(d){
        i1.style.left=`${d.x}px`
        // i1.style.top=`${d.y}px`
    })
    e1.addEventListener('mouseleave',function(){
        i1.style.opacity='0'
        
    })
})
e2.addEventListener('mouseenter',function(){
    i2.style.opacity='100'
    e2.addEventListener('mousemove',function(d){
        i2.style.left=`${d.x}px`
        // i2.style.top=`${d.y}px`
    })
    e2.addEventListener('mouseleave',function(){
        i2.style.opacity='0'
        
    })
})
e3.addEventListener('mouseenter',function(){
    i3.style.opacity='100'
    e3.addEventListener('mousemove',function(d){
        i3.style.left=`${d.x}px`
        // i3.style.top=`${d.y}px`
    })
    e3.addEventListener('mouseleave',function(){
        i3.style.opacity='0'
        
    })
})
e4.addEventListener('mouseenter',function(){
    i4.style.opacity='100'
    e4.addEventListener('mousemove',function(d){
        i4.style.left=`${d.x}px`
        // i4.style.top=`${d.y}px`
    })
    e4.addEventListener('mouseleave',function(){
        i4.style.opacity='0'
        
    })
})
e5.addEventListener('mouseenter',function(){
    i5.style.opacity='100'
    e5.addEventListener('mousemove',function(d){
        i5.style.left=`${d.x}px`
        // i5.style.top=`${d.y}px`
    })
    e5.addEventListener('mouseleave',function(){
        i5.style.opacity='0'
        
    })
})