const [download] = await Promise.all([
    page.waitforEvent('download'),
    page.getByText('Download').click()
]);
await download.saveAs('downloads/report.pdf');

await page.locator('#fileupload').setInputFiles('testdata/sample.pdf');

page.on('dialog',async dialog=>{
    const message =alertmessage;
    if (dialog.message()=message){
        await dialog.accept()

    }
    else{
        await dialog.dismiss()
    }
})

const datefield = await page.loacator('#date');
await datefield.evaluate((element)=>{
    element.removeAttribute('readonly');
    element.value = "9/01/2027";
    element.dispatchEvent(new Event ('input',{bubbles:true}));
    element.dispatchEvent(new Event('change',{bubbles: true}))
}
)
