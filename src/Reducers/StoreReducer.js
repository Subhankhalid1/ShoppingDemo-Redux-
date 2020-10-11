

const store = [
    // counter:0,
    // title:"Rana Subhan Khan",
    
    {
        id: '123',
        title: 'Half Sleeve Blue Jumper for Men',
        description: 'No fancy sizing charts here, one t-shirt size to rule them all',
        imageUrl: '/rana.jpg',
        price: '$ 399'
    },
    {
        id: '456',
        title: 'Full Sleeve Green Jumper for Men',
        description:
            'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
        imageUrl: '/subhan.jpg',
        price: '$ 499'
    },
    {
        id: '789',
        title: 'Full Sleeve Jumper  ',
        description: 'Sexy Ripped Solid Women Knitwear Cardigan Autumn Winter 2020 Fashion Long Sleeve Zipper Drawstring Hooded Casual Loose Sweaters',
        imageUrl: 'https://ae01.alicdn.com/kf/Hc3b54a733ea24b75801c9191744cd335K/Sexy-Ripped-Solid-Women-Knitwear-Cardigan-Autumn-Winter-2020-Fashion-Long-Sleeve-Zipper-Drawstring-Hooded-Casual.jpg_640x640.jpg',
        price: '$ 799 '
    }
];

export default function StoreReducer(state = store, action) {
    switch (action.type) {
        case 'Add':
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: true
                }
            })
        case 'Remove':
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    added: false
                }
            })
        default:
            return state;

    }
}