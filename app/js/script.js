self.addEventListener('load', () => {
    const links = document.querySelectorAll('.nav_wrap ul a li')
    const toggle = document.querySelectorAll(".nav_toogle")
    const body = document.querySelector("section")
    const heads = document.querySelector(".headers")
    const overHover = () => {
        links.forEach((item, index) => {
            item.onmouseenter = () => {
                toggle.forEach(tog_item => {                    
                    setTimeout(() => {
                        tog_item.style = 'display:none;'
                        if (tog_item.classList.contains(`toggle_${index}`)) {                        
                            tog_item.style = 'transition: all 0.3s; display:flex;'
                            tog_item.onmouseenter = () => {
                                tog_item.style = 'transition: all 0.3s; display:flex;'
                            }
                        }
                    }, 300) 
                })
            }
            item.onmouseout = () => {
                toggle.forEach(tog_item => {                    
                    setTimeout(() => {
                        if (tog_item.classList.contains(`toggle_${index}`)) {                        
                            body.onmouseenter = () => {
                                tog_item.style = 'display:none;'
                            }
                            heads.onmouseenter = () => {
                                tog_item.style = 'display:none;'
                            }
                        }
                    }, 300) 
                })
            }
            
        })
    }
overHover()
})

self.addEventListener('load', () => {
    const links = document.querySelectorAll('.nav_wrap_mobil ul a li')
    const toggle = document.querySelectorAll(".nav_toogle_mobil")
    const body = document.querySelector("section")
    const heads = document.querySelector(".headers")
    const overClick = () => {
      links.forEach((item, index) => {
        item.onclick = () => {
          toggle.forEach(tog_item => {                    
            setTimeout(() => {
              tog_item.style = 'display:none;'
                if (tog_item.classList.contains(`toggle_${index}`)) {                        
                  tog_item.style = 'transition: all 0.3s; display:flex;'
                  tog_item.onclick = () => {
                  tog_item.style = 'transition: all 0.3s; display:flex;'
                  }
                }
              }, 300) 
            })
          }
            item.onmouseout = () => {
              toggle.forEach(tog_item => {                    
                setTimeout(() => {
                  if (tog_item.classList.contains(`toggle_${index}`)) {                        
                    body.onmouseenter = () => {
                      tog_item.style = 'display:none;'
                    }
                      heads.onmouseenter = () => {
                      tog_item.style = 'display:none;'
                    }
                  }
                }, 300) 
              })
            }
            
        })
      }
overClick()
})