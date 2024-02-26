const formatDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    return new Date(date).toLocaleString('en-US', options);
}

function capitalizeEachWord(str) {
    return str.split(' ').map(word => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return '';
    }).join(' ');
}

export {
    formatDate,
    capitalizeEachWord
}