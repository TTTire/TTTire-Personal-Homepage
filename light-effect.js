console.log('Light effect script started loading');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Light effect initialization started');
    
    const lightEffect = document.querySelector('.light-effect');
    const letters = document.querySelectorAll('.letter');
    
    console.log('Light effect element:', lightEffect);
    console.log('Letters found:', letters.length);

    if (!lightEffect) {
        console.error('Light effect element not found!');
        return;
    }

    // 测试光效是否工作
    function updateLightPosition(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        console.log('Mouse position:', x, y);  // 添加鼠标位置日志
        
        const gradient = `
            radial-gradient(
                300px circle at ${x}px ${y}px,
                rgba(102, 126, 234, 0.3) 0%,
                rgba(118, 75, 162, 0.2) 20%,
                rgba(102, 126, 234, 0.1) 40%,
                transparent 80%
            )
        `;
        
        lightEffect.style.background = gradient;
        console.log('Gradient updated');  // 添加更新确认
    }

    // 添加测试用的固定光效
    lightEffect.style.background = `
        radial-gradient(
            300px circle at 50% 50%,
            rgba(102, 126, 234, 0.3) 0%,
            rgba(118, 75, 162, 0.2) 20%,
            rgba(102, 126, 234, 0.1) 40%,
            transparent 80%
        )
    `;

    document.addEventListener('mousemove', updateLightPosition, { passive: true });

    letters.forEach((letter, index) => {
        letter.addEventListener('mouseenter', () => {
            console.log(`Letter ${index} mouseenter`);
            lightEffect.style.opacity = '1';
            lightEffect.style.transition = 'opacity 0.15s ease';
        });

        letter.addEventListener('mouseleave', () => {
            console.log(`Letter ${index} mouseleave`);
            lightEffect.style.opacity = '0.7';
        });
    });

    console.log('Light effect initialization completed');
}); 