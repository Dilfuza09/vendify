// utils.js
export function filterProducts(products, filters) {
    return products.filter(product => {
        const { yumshoq, qattiq, boshqacha } = filters;
        return (
            (yumshoq && product.type === 'yumshoq') ||
            (qattiq && product.type === 'qattiq') ||
            (boshqacha && product.type === 'boshqacha') ||
            (!yumshoq && !qattiq && !boshqacha)
        );
    });
}

