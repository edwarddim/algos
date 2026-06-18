import pandas as pd

def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    data = {
        "student_id":[],
        "age":[]
    }
    for student in student_data:
        data["student_id"].append(student[0])
        data["age"].append(student[1])
    df = pd.DataFrame(data)
    return df



def createDataframe(student_data: List[List[int]]) -> pd.DataFrame:
    column_names = ["student_id", "age"]
    result_dataframe = pd.DataFrame(student_data, columns=column_names)
    return result_dataframe