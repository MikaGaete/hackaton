def shiftBitLength(x:int) -> int:    
    return 1 << ((x - 1).bit_length() - 1)

def initFixture(teams:list[str]):
    # minimo 2 equipos
    assert(len(teams)>1)

    # cantidad de partidos primera fase
    nMatches = shiftBitLength(len(teams))
    
    # se añaden None's
    teams += [None] * ((nMatches << 1) - len(teams))

    # initial phase matches
    matches = []
    for mId in range(nMatches):
        matches.append({
            "id" : mId,
            "date" : None,
            "teams" : [{"name" : teams[mId]}, {"name" : teams[mId + nMatches]}]
        })
    
    # initial phase
    phaseId = 0
    fixture = [{
        "title" : f"Round {phaseId}",
        "seeds" : matches
    }]

    # next phase
    nMatches >>= 1

    while nMatches:
        # recover previous phase
        prevPhase = fixture[phaseId]

        # phase matches
        matches = []
        for mId in range(nMatches):
            matl = prevPhase["seeds"][mId<<1]
            matr = prevPhase["seeds"][(mId<<1)+1]
            matches.append({
                "id" : mId,
                "date" : None,
                "teams" : [
                    {"name" : (f"R{phaseId}M{matl["id"]}") if matl["teams"][1] else matl["teams"][0]},
                    {"name" : (f"R{phaseId}M{matr["id"]}") if matr["teams"][1] else matr["teams"][0]}
                ]
            })

        # phase
        phaseId += 1
        fixture.append({
            "title" : f"Round {phaseId}",
            "seeds" : matches
        })

        # next phase
        nMatches >>= 1
    
    return fixture

def cleanFixture(fixture):
    mats = fixture[0]["seeds"]
    n = len(mats)
    i = 0
    while i<n:
        if mats[i]["teams"][1]["name"] == None:
            fixture[0]["seeds"] = fixture[0]["seeds"][:i]
            break
        i+=1
    return fixture

def createFixture(teams:list[str]):
    # initialize fixture
    fixt = initFixture(teams)

    # clean fixture
    cfixt = cleanFixture(fixt)

    return cfixt
