from fastapi import FastAPI, UploadFile, File, HTTPException
import lasio
import io
import pandas as pd
import numpy as np

app = FastAPI(title="WellQC+ Python Petrophysical Microservice", version="1.0.0")

@app.get("/")
def health_check():
    return {"status": "online", "service": "WellQC+ Python lasio Microservice"}

@app.post("/api/v1/parse-las")
async def parse_las_file(file: UploadFile = File(...)):
    try:
        content = await file.read()
        las = lasio.read(io.StringIO(content.decode("utf-8", errors="ignore")))
        
        curves_meta = []
        for curve in las.curves:
            curves_meta.append({
                "mnemonic": curve.mnemonic,
                "unit": curve.unit,
                "description": curve.descr
            })
            
        df = las.df()
        df_clean = df.replace([-999.25, -9999, np.nan], None)
        
        return {
            "well_name": las.well.WELL.value if "WELL" in las.well else "UNKNOWN",
            "company": las.well.COMP.value if "COMP" in las.well else "UNKNOWN",
            "start_depth": las.well.STRT.value if "STRT" in las.well else 0,
            "stop_depth": las.well.STOP.value if "STOP" in las.well else 0,
            "curves": curves_meta,
            "sample_rows": df_clean.head(50).to_dict(orient="records")
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"LAS processing failed: {str(e)}")
