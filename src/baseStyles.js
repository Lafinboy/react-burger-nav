const styles = {

    menuWrap(isOpen) {
        return {
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 2,
            width: 300,
            minWidth: '30%',
            height: '100%',
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
            transition: 'all 0.5s'
        }
    },

    menu() {
        return {
            height: '100%'
        }
    },

    itemList() {
        return {
            height: '100%'
        }
    },

    item() {
        return {
            display: 'block',
            outline: 'none'
        }
    },

    overlay: function overlay(isOpen) {
        return {
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 1,
            width: '100%',
            height: '100%',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
            transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s'
        }
    }
}


export default styles
