const parseArgs = () => {
    const args = process.argv.slice(2)
        .reduce((acc, arg, i, arr) => i % 2 ? acc : [...acc, `${arg.slice(2)} is ${arr[i + 1]}`], [])
        .join(', ');

    console.log(args);
};

parseArgs();